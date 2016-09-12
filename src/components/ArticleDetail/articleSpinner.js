import React, {Component} from 'react';
import Editor  from 'react-md-editor';
import style  from 'styles/blogDetail.less';
import Waypoint  from 'react-waypoint';

class ArticleSpinner extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { code: "# Markdown" };
    }

    render() {
        return (
            <div className={style['article-spinner']}>
                <section>
                    <h1 id="0">什么是DOM？</h1>
                    <p>
                        外行看来前端工程师的工作就是改页面（HTML、CSS），写脚本（JavaScript）。当你意识到你不是在改HTML而是在操作DOM时，你就升级了！ 那么什么是DOM？
                    </p>
                    <blockquote>
                        MDN: 文档对象模型 (DOM) 是HTML和XML文档的编程接口。它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将web页面和脚本或程序语言连接起来。
                    </blockquote>
                </section>
                <section>
                    <h1 id="3">DOM 创建</h1>
                    <p>
                        DOM节点（Node）通常对应于一个标签，一个文本，或者一个HTML属性。DOM节点有一个nodeType属性用来表示当前元素的类型，它是一个整数
                    </p>
                    <ol>
                        <li>Element，元素</li>
                        <li>Attribute，属性</li>
                        <li>Text，文本</li>
                    </ol>
                    <p>
                        DOM节点创建最常用的便是document.createElement和document.createTextNode方法：
                    </p>
                </section>
                <section>
                    <h1 id="5">DOM 查询</h1>
                    <p>
                        元素查询的API返回的的结果是DOM节点或者DOM节点的列表。document提供了两种Query方法：
                    </p>
                    <blockquote>
                        MDN: 文档对象模型 (DOM) 是HTML和XML文档的编程接口。它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将web页面和脚本或程序语言连接起来。
                    </blockquote>
                </section>
            </div>
        );
    }
}

export default ArticleSpinner;