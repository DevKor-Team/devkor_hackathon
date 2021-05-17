import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Modal from './Modal';

const LoginModal = ({ isOn, turnOff, title }) => {
  const router = useRouter();
  const moveTo = (href) => {
    router.push(href);
  };
  return (
    <Modal isOn={isOn} turnOff={turnOff}>
      <div className="auth">
        <div className="auth__title">{title}</div>
        <div className="auth__subtitle">Welcome to DevKor</div>
        <div className="auth__buttonContainer">
          <div
            role="button"
            tabIndex={0}
            className="button"
            onClick={() => {
              moveTo('http://localhost:8000/oauth/google/login');
            }}
          >
            <div className="button_img">
              <img src="images/google_logo.svg" alt="google login" />
            </div>
            <div className="button__description">Google 로그인</div>
          </div>
          <div className="button">
            <div className="button_img">
              <img src="images/github_logo.svg" alt="google login" />
            </div>
            <div className="button__description">Github 로그인</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

LoginModal.propTypes = {
  isOn: PropTypes.bool,
  turnOff: PropTypes.func,
  title: PropTypes.string,
};

export default LoginModal;
