/**
 * Created by Administrator on 2016/8/4.
 */
class Car{
    constructor(props){
        this.props =props;
    }
    getByAttr(attr){
        return this.props[attr];
    }
}
export default Car;

