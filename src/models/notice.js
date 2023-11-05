import { produce } from 'immer';
export default {
  state: {
    list: [
      {
        picture: 'https://randomuser.me/api/portraits/women/85.jpg',
        title: '年终奖预告',
        desc: '如果坚持上班到年底，将会得到4个月的年终奖',
        read: false,
      },
      {
        picture: 'https://randomuser.me/api/portraits/women/85.jpg',
        title: '年终奖预告11',
        desc: '如果坚持上班到年底，将会得到4个月的年终奖11',
        read: true,
      },
      {
        picture: 'https://randomuser.me/api/portraits/women/85.jpg',
        title: '年终奖预告22',
        desc: '如果坚持上班到年底，将会得到4个月的年终奖22',
        read: false,
      },
    ],
  },
  reducers: {
    readed(state, action) {
      let { payload } = action;
      let obj = produce(state, (draft) => {
        //draft是被处理的目标对象的操作副本
        draft.list[payload].read = true;
      });
      // console.log(obj);
      return obj;
    },
  },
};
