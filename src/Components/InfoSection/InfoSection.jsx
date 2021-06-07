import React from 'react'
import { Conatiner,Button } from '../../globalStyles';
import {InfoSec} from './Info.elements';
import {Link} from 'react-router-dom';

import { InfoRow,InfoColumn,TextWrapper,TopLine,Heading,Subtittle,ImgWrapper,Img} from './Info.elements';


const InfoSection = ({lightBg,imgStart,lightTopLine,lightText,lightTextDesc,buttonLable,description,headline,topLine,primary,img,start,alt}) => {
    return (
        <>
            <InfoSec lightBg={lightBg }>
                    <Conatiner>
                         <InfoRow imgStart={imgStart}>
                             <InfoColumn>
                                 <TextWrapper>
                                      <TopLine lightTopLine= { lightTopLine}>{topLine}</TopLine>
                                      <Heading lightText={lightText}>{headline}</Heading>
                                      <Subtittle lightTextDesc={lightTextDesc}>{description}</Subtittle>
                                      <Link to="/sign-up">
                                          <Button big fontBig  primary={primary}>{buttonLable}</Button>
                                      </Link>
                                 </TextWrapper>
                             </InfoColumn>
                             <InfoColumn>
                                 <ImgWrapper start={start}>
                                     <Img src={img} alt={alt}/>
                                 </ImgWrapper>
                             </InfoColumn>
                         </InfoRow>
                    </Conatiner>              
            </InfoSec>
        </>
    )
}

export default InfoSection
