// 先序
function preOrder (root) {
  if (!root) {
    return
  }
  console.log('cur:::', root.val)
  preOrder(root.left)
  preOrder(root.right)
}
// 中序
function midOrder (root) {
  if (!root) {
    return
  }
  midOrder(root.left)
  console.log('cur:::', root.val)
  midOrder(root.right)
}
// 后序
function postorder (root) {
  if (!root) {
    return
  }
  postorder(root.left)
  postorder(root.right)
  console.log('cur:::', root.val)
}
