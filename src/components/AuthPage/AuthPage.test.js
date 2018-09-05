import React from 'react';
import { shallow, mount, unmount } from 'enzyme';
import { AuthPage } from './AuthPage';
import { MemoryRouter } from 'react-router-dom';

describe('LoginPage', () => {
  describe('routes', () => {
    it('renders a single password input if at /login route', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/login' ]}>
          <AuthPage />
        </MemoryRouter>
      );
      expect(wrapper.find('[data-test="login-password"]').length).toEqual(1);
      wrapper.unmount();
    });
  
    it('renders a password and password confirm at /reset-password route', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/reset-password' ]}>
          <AuthPage />
        </MemoryRouter>
      );
      expect(wrapper.find('[data-test="login-password"]').length).toEqual(1);
      expect(wrapper.find('[data-test="confirm-password"]').length).toEqual(1);
      wrapper.unmount();
    });
  });
});