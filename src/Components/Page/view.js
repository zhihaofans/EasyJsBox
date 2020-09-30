const UIBase = require("../../Foundation/ui-base")

class View extends UIBase {
    constructor(controller) {
        this.controller = controller
        this.pageIdPrefix = "page-"
    }

    setViews(views) {
        this.views = views
    }

    /**
     * 创建一个页面
     * @param {*} views 页面内容
     * @param {*} index 页面索引，需要和菜单对应
     */
    creator(views, index, isHorizontalSafeArea = true) {
        return {
            type: "view",
            props: {
                id: `${this.prefix}${index}`,
                hidden: this.selectedPage !== index,
                clipsToBounds: true
            },
            layout: (make, view) => {
                make.top.bottom.equalTo(view.super)
                if (isHorizontalSafeArea) {
                    make.left.right.equalTo(view.super.safeArea)
                } else {
                    make.left.right.equalTo(view.super)
                }
            },
            views: views
        }
    }

    view() {
        return {
            type: "view",
            props: { clipsToBounds: true },
            layout: $layout.fill,
            views: this.views
        }
    }
}

module.exports = View