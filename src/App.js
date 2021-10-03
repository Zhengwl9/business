import React from "react";
import Routers from './pages/router'
import {Layout,} from 'antd'
import style from './app.scss'
import {useObserver} from 'mobx-react'

const {Header, Content, Footer} = Layout;

function App() {
  return useObserver(() => (
    <Layout style={{minHeight: '100vh'}}>
      <Layout className={style.siteLayout}>
        <Header
          className={style.siteLayoutBackground}
          style={{textAlign: 'center', fontSize: 24}}>
          IT Team
        </Header>
        <Content style={{margin: '16px'}}>
          <div style={{padding: 24, minHeight: 360}}>
            <Routers/>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          本网站由郑维丽拥有和运营 <br/>
          联系方式: zhengweili789@gmail.com</Footer>
      </Layout>
    </Layout>
  ))
}

export default App


