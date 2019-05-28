import { remote } from 'electron';

const fs = remote.require('fs');

export const getFolderPath = (multi?: boolean) => {
  const properties: any[] = multi ? ['openDirectory', 'multiSelections'] : ['openDirectory'];
  const paths = remote.dialog.showOpenDialog(remote.getCurrentWindow(), { properties });
  if (paths) {
    return paths[0];
  }
  return paths;
};

export const openFileDialog = (): void => {
  remote.dialog.showOpenDialog(
    remote.getCurrentWindow(),
    {
      filters: [{ name: 'Images', extensions: ['png', 'jpg'] }],
      properties: ['openFile', 'multiSelections']
    },
    filePaths => {
      if (filePaths) {
        filePaths.forEach(file => {
          // read image (note: use async in production)
          const _img = fs.readFileSync(file).toString('base64');
          const [_ext] = file.split('.');
          const _out = `<img src="data:image/${_ext};base64,${_img}" />`;
          const _target = document.getElementById('image_container');
          if (_target) {
            _target.insertAdjacentHTML('beforeend', _out);
          }
        });
      }
      return;
    }
  );
};
