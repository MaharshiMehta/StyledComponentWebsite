import React from 'react';
import {FooterContainer,FooterSubHeading,FooterSubText,FooterSubscription,Form,FormInput,FooterLinkContainer,FooterLink,FooterLinksItems,FooterLinkTittle,FooterLinkWrapper} from './Footer.elements';
import {Button} from './globalStyles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends 
                </FooterSubHeading>
                <FooterSubText>
                    you can unsubscribe at any time 
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your email"/>

                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinkContainer>
                <FooterLinkWrapper>
                    <FooterLinksItems>
                        <FooterLinkTittle>
                            About Us
                        </FooterLinkTittle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTittle>
                            Contact Us
                        </FooterLinkTittle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTittle>
                            Video
                        </FooterLinkTittle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTittle>
                            Social Media
                        </FooterLinkTittle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                    </FooterLinksItems>
                </FooterLinkWrapper>
            </FooterLinkContainer>
        </FooterContainer>
    )
}

export default Footer;