import styled from 'styled-components';

import { Icon, iconSizeMap } from './Icon';
import { iconMap } from './iconMap';

const iconList = Object.keys(iconMap);
const iconSizes = Object.entries(iconSizeMap);

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FlexItem = styled.div`
  align-items: center;
  display: flex;
  flex-basis: ${({ width }) => width || '16%'};
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 20px;
`;

const IconName = styled.code`
  background: ${({ theme }) => theme.color.grey100};
  border: 1px solid ${({ theme }) => theme.color.grey300};
  color: ${({ theme }) => theme.color.brandBlue500};
  font-size: 14px;
  padding: 2px 4px;
  white-space: nowrap;
`;

const IconContainer = styled.div`
  color: ${({ theme }) => theme.color.grey500};
`;

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const IconDefault = () => (
  <FlexContainer>
    {iconList.map((icon) => (
      <FlexItem key={icon}>
        <IconContainer>
          <Icon type={icon} />
        </IconContainer>
        <br />
        <IconName>{icon}</IconName>
      </FlexItem>
    ))}
  </FlexContainer>
);

IconDefault.storyName = 'All icons';

export const IconSizes = () => (
  <FlexContainer>
    {iconSizes.map(([sizeName, sizeValue]) => (
      <FlexItem key={sizeName} width={`${(1 / iconSizes.length) * 100}%`}>
        <Icon type="asterisk" size={sizeName} />
        <br />
        <IconName>
          {sizeName}: {`${sizeValue}px`}
        </IconName>
      </FlexItem>
    ))}
  </FlexContainer>
);

IconSizes.storyName = 'Sizes';
