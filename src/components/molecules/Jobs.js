import styled from "styled-components";
import ApplyButton from "../atoms/ApplyButton";

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
        <ApplyButton word="apply" />
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

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 32px 16px;
  }
`;

const JobContent = styled.div`
  margin: 36px 0 16px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 34px 98px 34px 48px;
  }
`;
const JobTitleWrapper = styled.div`
  text-align: center;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    text-align: left;
  }
`;
const JobTitle = styled.h4`
  color: ${({ theme }) => theme.colors.darkNavy};
  margin: 0;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.8px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -1.07px;
  }
`;
const LocationWrapper = styled.div`
  text-align: center;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    text-align: left;
  }
`;
const Location = styled.p`
  color: ${({ theme }) => theme.colors.darkNavy};
  margin: 0;
`;

const ApplyButtonWrapper = styled.div`
  margin: 0 32px 32px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 38px 48px 38px 0;
  }
`;
