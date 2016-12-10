let domEvent = function (ele) {
    return new domEvent.prototype.init(ele);
}

domEvent.prototype = {
    init(ele) {
        this.ele = ele;
        return this;
    },
    on(type, eventHandle) {
        let ele = this.ele;
        if (ele.addEventListener) {
            ele.addEventListener(type, eventHandle, false);
        } else if (ele.attachEvent) {
            ele.attachEvent("on" + type, eventHandle);
        }
    },
    off(type, eventHandle) {
        let ele = this.ele;
        if (ele.addEventListener) {
            ele.removeEventListener(type, eventHandle, false);
        } else if (elem.detachEvent) {
            ele.detachEvent("on" + type, eventHandle);
        }
    }
};

domEvent.prototype.init.prototype = domEvent.prototype;

export default domEvent;