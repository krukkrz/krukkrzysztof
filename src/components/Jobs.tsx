import styled from "styled-components"
import Job from "./Job"
import { H2 } from "./fonts"
import { JobProps } from "../data/jobs"

type Props = {
    jobs: JobProps[]
}

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
`

const Jobs = (props: Props) => {
    return (
        <Wrapper>
            <H2>Experience</H2>
            {props.jobs.map(
                (j, i) => <Job
                    from={j.from}
                    to={j.to}
                    company={j.company}
                    role={j.role}
                    responsibilites={j.responsibilites}
                />
            )}
        </Wrapper>
    )
}

export default Jobs