var _computedKey, _computedKey2, _initProto;
const dec = () => {};
_computedKey = babelHelpers.toPropertyKey(getKeyI());
_computedKey2 = babelHelpers.toPropertyKey(getKeyJ());
class Foo {
  static {
    [_initProto] = babelHelpers.applyDecs2203R(this, [[dec, 2, _computedKey], [dec, 2, _computedKey2]], []).e;
  }
  constructor() {
    _initProto(this);
  }
  [_computedKey]() {
    return 1;
  }
  [_computedKey2]() {
    return 2;
  }
}
