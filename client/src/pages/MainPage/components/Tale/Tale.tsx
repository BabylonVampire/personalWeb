import { FC } from 'react'

interface ITaleProps {
  name: string;
  content: {
    type: string,
    text: string,
    image: string,
  }[]
}

const Tale: FC<ITaleProps> = ({name, content}) => {
  return (
    <div>
      <div className="name">{name}</div>
    </div>
  )
}

export default Tale;