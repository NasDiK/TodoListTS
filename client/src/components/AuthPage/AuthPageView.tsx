import {inject, observer} from 'mobx-react';
import React from 'react';
import Button from '../shared/Base/Button';
import DirectoryField from '../shared/Base/DirectoryField';
import s from './AuthPage.module.scss';
import Typography from '../shared/Base/Typography';

type InjectedStores = {
  RootStore: any,
  AuthPageStore: any
}

const mapStore = inject((stores: InjectedStores) => {
  console.log(stores);
  return {
    setCredentional: stores.AuthPageStore.setCredentional,
    credentials: stores.AuthPageStore.credentials,
    setIsLogged: stores.RootStore.setIsLogged
  }
});

const AuthPageView = (props: any) => {
  const {setCredentional, credentials, setIsLogged} = props;

  
  return (
    <div className={s.authWrapper}>
      <div className={s.credentialFormWrapper}>
        <div className={s.header}>
          <Typography weight={'medium'} variant={'body16'}>{'Авторизация'}</Typography>
        </div>
        <div className={s.content}>
          <div className={s.field}>
            <DirectoryField
              value={credentials['login']}
              placeholder={'Введите логин'}
              type={'text'}
              fullWidth={true}
              onChange={(val)=>{setCredentional('login', val)}}
            />
          </div>
          <div className={s.field}>
            <DirectoryField
              value={credentials['password']}
              placeholder={'Введите пароль'}
              type={'text'}
              fullWidth={true} 
              onChange={(val)=>{setCredentional('password', val)}}
            />
          </div>
          <Button onClick={()=>{setIsLogged(true);}}>{'Войти'}</Button>
        </div>
      </div>
    </div>
  );
};

export default mapStore(observer(AuthPageView));