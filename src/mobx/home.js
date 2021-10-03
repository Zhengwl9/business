import {observable} from 'mobx'

class Home {
  @observable
  lists = [
    {
      time: '2021-03-01',
      title: '商务洽谈',
    }
  ];
}

export default new Home();