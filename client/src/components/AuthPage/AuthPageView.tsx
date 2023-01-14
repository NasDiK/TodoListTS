import {inject, observer} from 'mobx-react';
import React from 'react';
import Button from '../shared/Base/Button';
import DirectoryField from '../shared/Base/DirectoryField';

const mapStore = inject('AuthPageStore');

const AuthPageView = mapStore(observer((props: any) => {
  console.log(props);
  return (
    <div>
      <DirectoryField value={''} placeholder={'Login'} type={'text'} />
      <DirectoryField value={''} placeholder={'Password'} type={'text'} />
      <Button variant={'default'}>Knopka</Button>
    </div>
  );
}));

export default AuthPageView;