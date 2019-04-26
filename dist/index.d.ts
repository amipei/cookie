/**
 * Cookie 基本操作封装
 */
declare let amiCookie: {
    /**
     * TODO: 实现 cookie 的获取
     * @param {String} name 属性名
     */
    get: (name: any) => void;
    /**
     * TODO: 实现 cookie 添加方法
     * @param {String} name 属性名
     * @param {String} value 属性值
     * @param {Object} options 可选值对象
     * @param {Date} options.expires 过期时间
     * @param {Number} options.maxAge 过期秒数
     * @param {String} options.domain
     * @param {String} options.path
     * @param {String} options.secure
     */
    add: () => void;
    delete: () => void;
};
export default amiCookie;
