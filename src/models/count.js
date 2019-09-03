export default {
  namespace: 'count',
  state: 3,
  reducers: {
    'add'(count) {
      return ++count;
    },
    'minus'(count) {
      return --count;
    }
  } 
}