const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.course.parts.map(part => <Part key={part.id} part={part} />)}
        </div>
    )
}

const Part = (props) => {
    return (
        <p>{props.part.name} {props.part.exercises}</p>
    )
}

const Total = (props) => {
    const total = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p><strong>total of {total} exercises</strong></p>
    )
}


const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            {<Total course={course} />}
        </div>
    )
}

export default Course