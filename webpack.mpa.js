/**
 * Created by Administrator on 2016/8/23.
 */
var fs = require("fs"),
    path = require("path"),
    webpack = require("webpack"),
    htmlWebpackPlugin = require("html-webpack-plugin"),
    extractTextPlugin = require("extract-text-webpack-plugin"),
    commonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var libsPath = path.resolve(process.cwd(),'src/static/libs'),
    utilPath = path.resolve(libsPath,'util'),
    entryPath = path.resolve(process.cwd(),"src/entry"),
    dirs = fs.readdirSync(entryPath);


const vendor = ["jquery","react","react-dom","react-router"];

var config= {
    // ======start=========for entry
    entry:function(){
        var entry = this.getEntry();
        entry.util = this.getUtil(utilPath);
        entry.vendor = vendor;
         return entry;
    },
    getEntry:function(){
        var files={};
        dirs.forEach(function(dir){
            var name = dir.replace(/\.[^\.]+$/g,"");
            if (name) {
                files["js/"+name] =path.resolve(entryPath, dir);
            }
        })
        return files;
    },
    getUtil:function(filePath){
        var dirs = fs.readdirSync(filePath),plugins=[];
        dirs.forEach(function(dir){
            plugins.push(path.resolve(filePath, dir));
        });
        return plugins;
    },
    //======end=========for entry
    //======start=========for plugins
    plugins:function(){
        var _this = this,plugins=[];
        plugins.push(this.env());//definePlugin
        plugins.push(this.commonPlugins());//common.js
        plugins.push(this.extractCss());//extract for link css
        plugins.push(this.uglifyJsPlugin)//plugin uglify
        //for many entry => create html
        dirs.forEach(function(dir){
            var name = dir.replace(/\.[^\.]+$/g,"");//main or index and so on
            if(name){
                plugins.push(new htmlWebpackPlugin({
                    title:name+"Demo",
                    //favicon:'./src/img/favicon.ico',
                    filename:'./pages/'+name+'.html',
                    template:'./src/static/pages/'+name+'.html',
                    inject:true,
                    hash:true,
                    chunks:_this.getChunk(name),
                    minify:{
                        removeComments:true,
                        collapseWhitespace:false
                    }
                }));
            }
        })
        return plugins;
    },
    getChunk:function(name){
        var chunk = [];
        chunk.push("js/"+name);
        switch(name){
            case "index":
            case "main":
            default:
                chunk.push("vendor");
                chunk.push("util");
                break;
        }
        return chunk;
    },
    commonPlugins:function(){
       return new commonsChunkPlugin({
            name: ["vendor","util"],
            filename:"common/[name].js",
            minChunks: Infinity
        })
    },
    env:function(){
        return new webpack.DefinePlugin({
            'process.env.NODE_ENV':process.argv[2]==="--dev"?JSON.stringify("develop"):JSON.stringify("production")
        })
    },
    extractCss:function(){
        return new extractTextPlugin("css/common.css")
    },
    uglifyJsPlugin:function(){
        return new  webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        })
    }
}
module.exports  = {
    entry:config.entry(),
    plugins:config.plugins()
}