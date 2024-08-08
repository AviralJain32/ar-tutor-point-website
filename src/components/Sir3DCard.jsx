import { CardBody, CardContainer, CardItem } from "./ui/_3D_Card";

export function ThreeDCardDemo({image,name,description}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  w-auto sm:w-[30rem] h-auto rounded-xl px-6">
        <CardItem translateZ="100" className="w-full ">
          <img
            src={image}
            
            className=" w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className=" text-2xl text-primary font-bold mt-4 text-center"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-center"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
