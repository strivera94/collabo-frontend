export default (state={}, {type, payload}) => {
    switch (type) {
      case 'SET_USER':
        return payload;

      // case 'SET_USER_ERROR':
      //   return payload;

      case 'EDIT_PROFILE':
        return payload

      case 'CLEAR_USER':
        return {};

      default:
        return state;
    }
};