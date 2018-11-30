import Api from '@/services/Api'

export default {
  index (item) {
    return Api().get('cart', {
      params: item
    })
  },
  cart (user_id) {
    return Api().get(`cart/${user_id}`, user_id)
  },
  post (item) {
    return Api().post('cart', {
      params: item
    })
  },
  delete (itemId, user_id) {
    return Api().delete(`cart/${user_id}/${itemId}`, {
      itemId: itemId,
      user_id: user_id
    })
  }
}
