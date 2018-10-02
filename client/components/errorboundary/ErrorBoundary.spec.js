import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
    it('should the children properly when having no error', () => {
        let wrapper = shallow(
                        <ErrorBoundary>
                            <div>
                                <h2>Yes, I am render properly, thank you</h2>
                            </div>
                        </ErrorBoundary>);
         expect(wrapper.find('div')).to.be.not.null;
         expect(wrapper.find('h2').text()).to.be.eq('Yes, I am render properly, thank you');
    });
    it('should render error message', () => {
        let wrapper = shallow(<ErrorBoundary/>);
        wrapper.setState({hasError: true});
        expect(wrapper.find('p')).to.be.not.null;
        expect(wrapper.find('p').text()).to.be.eq('Sorry, we are having a problem, our team are working on this');
    });
});
