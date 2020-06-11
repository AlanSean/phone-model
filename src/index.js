import iosModel from './ios';

const isIPhone = /iPhone/g.test(window.navigator.userAgent);

const getSupport = (function () {
    if (window.CSS && typeof CSS.supports == 'function' && isIPhone) {
        if (CSS.supports('top: env(safe-area-inset-top)')) {
            return'env'
        }
        if (CSS.supports('top: constant(safe-area-inset-top)')) {
            return'constant'
        }
        return false
    }
    return false
})();

let element;
export function getSafeAreaInset() {
    let safeAreaInset = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
    if (getSupport) {
        if(!element){
            element = document.createElement('div');
            // element.innerHTML="检测刘海屏";
            // element.id="safe-area-inset"
            element.style.display = "none";
            // element.style.zIndex = "-100";
            element.style.paddingLeft = `${getSupport}(safe-area-inset-left)`;
            element.style.paddingRight = `${getSupport}(safe-area-inset-right)`;
            element.style.paddingTop = `${getSupport}(safe-area-inset-top)`;
            element.style.paddingBottom = `${getSupport}(safe-area-inset-bottom)`;
            document.body.appendChild(element);
        }
        const domStyle = getComputedStyle(element);
        safeAreaInset = {
            left: parseFloat(domStyle.paddingLeft),
            right: parseFloat(domStyle.paddingRight),
            top: parseFloat(domStyle.paddingTop),
            bottom: parseFloat(domStyle.paddingBottom),
        }
    }
    return safeAreaInset
}
export default function() {
    //主要是判断是不是刘海屏
    if(!isIPhone){
        return {
            statusHeight: 0,
            tabbarHeight: 0
        }
    }
    if(getSupport){
        const { top,bottom } = getSafeAreaInset();
        if(top!=0 || bottom!=0) return {
            statusHeight: top,
            tabbarHeight: bottom
        };
    }
    const { 
        devicePixelRatio,
        screen:{
            width,
            height
        }
    } = window;
    return iosModel[`@${devicePixelRatio}x`][`${width*devicePixelRatio}x${height*devicePixelRatio}`];
};
