import * as _0x46fc80 from 'megajs';
const auth = {
  'email': 'permaunban@gmail.com',
  'password': 'Umar@032',
  'userAgent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"
};
export const upload = (_0x1b6ee1, _0x380359) => {
  return new Promise((_0x2f664b, _0x37a00c) => {
    try {
      const _0x211a4e = new _0x46fc80.Storage(auth, () => {
        const _0x1e3133 = _0x211a4e.upload({
          'name': _0x380359,
          'allowUploadBuffering': true
        });
        _0x1b6ee1.pipe(_0x1e3133);
        _0x211a4e.on("add", _0x1ee040 => {
          _0x1ee040.link((_0x54a0d4, _0xb78df9) => {
            if (_0x54a0d4) {
              _0x37a00c(_0x54a0d4);
            } else {
              _0x211a4e.close();
              _0x2f664b(_0xb78df9);
            }
          });
        });
        _0x211a4e.on("error", _0x117b03 => {
          _0x37a00c(_0x117b03);
        });
      });
    } catch (_0x194e9d) {
      _0x37a00c(_0x194e9d);
    }
  });
};
export const download = _0x4b35d4 => {
  return new Promise((_0x5bdf6e, _0x57e0a0) => {
    try {
      const _0x9d39de = _0x46fc80.File.fromURL(_0x4b35d4);
      _0x9d39de.loadAttributes(_0x2543ce => {
        if (_0x2543ce) {
          _0x57e0a0(_0x2543ce);
          return;
        }
        _0x9d39de.downloadBuffer((_0x33ee29, _0x4c5f8f) => {
          if (_0x33ee29) {
            _0x57e0a0(_0x33ee29);
          } else {
            _0x5bdf6e(_0x4c5f8f);
          }
        });
      });
    } catch (_0x5ba5fd) {
      _0x57e0a0(_0x5ba5fd);
    }
  });
};