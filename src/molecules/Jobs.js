import styled from "styled-components";
import ButtonScoot from "../atoms/ButtonScoot";

export default function Jobs({ title, location }) {
  return (
    <JobWrapper>
      <JobContent>
        <JobTitleWrapper>
          <JobTitle>{title}</JobTitle>
        </JobTitleWrapper>
        <LocationWrapper>
          <Location>{location}</Location>
        </LocationWrapper>
      </JobContent>
      <ApplyButtonWrapper>
        <ButtonScoot word="apply" />
      </ApplyButtonWrapper>
    </JobWrapper>
  );
}

const JobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.snow};
  margin: 0 32px 32px;
`;

const JobContent = styled.div`
  margin: 36px 0 16px;
`;
const JobTitleWrapper = styled.div`
  text-align: center;
`;
const JobTitle = styled.h4`
  color: ${({ theme }) => theme.colors.darkNavy};
  margin: 0;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.8px;
`;
const LocationWrapper = styled.div`
  text-align: center;
`;
const Location = styled.p`
  color: ${({ theme }) => theme.colors.darkNavy};
  margin: 0;
`;

const ApplyButtonWrapper = styled.div`
  margin: 0 32px 32px;
`;
