export type JobProps = {
    from: string
    to: string
    company: string
    role: string
    responsibilites: string[]
}

export const jobs: JobProps[] = [
    {
      company: 'Samsara Inc.',
      from: 'February 2023',
      to: 'now',
      role: 'Golang Software Engineer',
      responsibilites: [
        'Develop and maintain Samsara public API.',
        'Develop and maintain Samsara microservices utilizing a stack that includes Go, ReactJS, Typescript, AWS, GraphQL, SQS, and gRPC.',
        'Maintain a regular on-call shift to provide support during occasional outages.',
        'Write RFC documentation (technical requirements).'
      ]
    },
    {
      company: 'Grape Up Sp. z.o.o.',
      from: 'September 2022',
      to: 'January  2023',
      role: 'Fullstack Java Engineer',
      responsibilites: [
        'Development and maintenance of a Kudos internal application with stack: serverless framework, NodeJS, AWS Lambda, ReactJS, Typescript'
      ]
    },
    {
      company: 'DNA Technology Sp. z.o.o.',
      from: 'November 2020',
      to: 'September 2022',
      role: 'Fullstack Java Engineer',
      responsibilites: [
        'Development and maintenance of a Java 11 Spring Boot project.',
        'Apache Kafka integration.',
        'Maintenance of a CI/CD GitLab pipelines',
        'Development of a ReactJS application for a fin-tech startup.',
        'Initialisation of DNA Meetups and leading its organisation',
        'Participation in recruitment pipeline - code review and an interview with candidates',
        'Writing Medium articles published under DNA Publications: medium.com/@krzysztof-t-kruk',
        'Participation in mentoring sessions as a mentee',
      ]
    },
    {
      company: 'Commerzbank AG S.A.',
      from: 'November 2019',
      to: 'November 2020',
      role: 'Junior Java Developer',
      responsibilites: [
        'Development of an application using Java 8 and FRAME (Commerzbank’s Spring-based framework).',
        'Development of a web application made in React with Redux implementation.– Modification of charts using Highcharts library.',
      ]
    },
    {
      company: 'Intelligent Logistic Solutions Sp. z.o.o.',
      from: 'January',
      to: 'October 2019',
      role: ' Junior Software Developer ',
      responsibilites: [
        'Development of an authentication and authorization system, written in Spring Boot framework using JWT.',
        'Development of a REST API using ORDS (Oracle) and Spring Boot',
        'Unit testing using Spock',
        'Development of two multi module Angular 6 web applications for servicing an internal API, to enable display and editing data as well as file transfer.',
      ]
    }
  ]