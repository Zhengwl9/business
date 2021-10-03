import React, {Component} from 'react';
import {observer} from 'mobx-react'
import homeLogic from '../../mobx/home'
import style from './index.scss'

@observer
class Index extends Component {
  render() {
    const { lists } = homeLogic;
    return (
      <div>
        {
          lists.map(item => (
            <div key={item.title} className={style.titleBox}>
              <p>{item.time}</p>
              <div className={style.contentBox}>
                <h2>{item.title}</h2>
                <p className={style.eachContent}>如果您有移动 app、web 网页、小程序 的开发需求，欢迎洽谈</p>
                <p className={style.eachContent}>联系方式：</p>
                <p className={style.eachContent}>姓名：Weili Zheng</p>
                <p className={style.eachContent}>邮箱：<a href="mailto:zhengweili789@gmail.com" target="_blank" rel="noopener">zhengweili789@gmail.com</a></p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Index;