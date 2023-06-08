import styled from "styled-components"
import Job, { JobProps } from "./Job"
import { H2 } from "./fonts"

type Props = {
    jobs: JobProps[]
}

const Wrapper = styled.div`
width: 100%
`

const Jobs = (props: Props) => {
    return (
        <Wrapper>
            <H2>Experience</H2>
            {props.jobs.map(
                j => <Job
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