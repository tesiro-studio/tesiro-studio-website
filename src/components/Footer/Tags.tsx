import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react'
import { Engine, Bodies, Composite } from 'matter-js';


const Tags: React.FC = () => {
  const requestRef = useRef<number>();
  const box1Ref = useRef<HTMLDivElement | null>(null);
  const box2Ref = useRef<HTMLDivElement | null>(null);
  const box3Ref = useRef<HTMLDivElement | null>(null);
  const box4Ref = useRef<HTMLDivElement | null>(null);
  const box5Ref = useRef<HTMLDivElement | null>(null);
  const box6Ref = useRef<HTMLDivElement | null>(null);
  const box7Ref = useRef<HTMLDivElement | null>(null);
  const box8Ref = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Engine>();

  const animate = () => {
    engineRef.current = Engine.create();
    const engine = engineRef.current;

    const allBox = [box1Ref, box2Ref, box3Ref, box4Ref, box5Ref, box6Ref, box7Ref, box8Ref].map((ref, idx) => ({
      body: Bodies.rectangle(100 + idx * 20, (-400 + idx * 20), ref.current?.clientWidth ?? 0, ref.current?.clientHeight ?? 0),
      elem: ref.current,
      render() {
        const {x, y} = this.body.position;
        if (ref.current) {
          ref.current.style.top = `${y - (ref.current.clientHeight / 2)}px`;
          ref.current.style.left = `${x - (ref.current.clientWidth / 2)}px`;
          ref.current.style.transform  = `rotate(${this.body.angle}rad)`;
        }
      },
    }))
  
    const ground1 = Bodies.rectangle(
      0, // x
      0, // y
      2000, // w
      20, // h
      {isStatic: true}
    );
    const ground2 = Bodies.rectangle(
      0, // x
      -400, // y
      1, // w
      1000, // h
      {isStatic: true}
    );
    const ground3 = Bodies.rectangle(
      800, // x
      -400, // y
      1, // w
      1000, // h
      {isStatic: true}
    );

    Composite.add(engine.world, [
      ...allBox.map(box => box.body),
      ground1,
      ground2,
      ground3,
    ]);
  
    (function rerender() {
      allBox.map(box => box.render());
      Engine.update(engine);
      requestRef.current = requestAnimationFrame(rerender);
    })();
  };

  useEffect(() => {
    animate();
    return () => {
      requestRef.current && cancelAnimationFrame(requestRef.current);
      engineRef.current && Engine.clear(engineRef.current);
    };
  }, []);

  return (
    <Box pos={'fixed'} left={0} bottom={0} right={0} opacity={{ base: 0.3, lg: 0.7 }} fontSize={'1.25rem'} color={'#fff'} pointerEvents={'none'} userSelect={'none'}>
      <Box ref={box1Ref} whiteSpace={'nowrap'} position={'absolute'} border={'0.0625rem solid'} borderColor={'#fff'} borderRadius={'0.5rem'} p={'0.25rem 1rem'}>Combination Of Decentralization</Box>
      <Box ref={box2Ref} whiteSpace={'nowrap'} position={'absolute'} border={'0.0625rem solid'} borderColor={'#fff'} borderRadius={'0.5rem'} p={'0.25rem 1rem'}>Blockchain Technology</Box>
      <Box ref={box3Ref} whiteSpace={'nowrap'} position={'absolute'} border={'0.0625rem solid'} borderColor={'#fff'} borderRadius={'0.5rem'} p={'0.25rem 1rem'}>Privacy</Box>
      <Box ref={box4Ref} whiteSpace={'nowrap'} position={'absolute'} border={'0.0625rem solid'} borderColor={'#fff'} borderRadius={'0.5rem'} p={'0.25rem 1rem'}>Transparenc</Box>
      <Box ref={box5Ref} whiteSpace={'nowrap'} position={'absolute'} border={'0.0625rem solid'} borderColor={'#fff'} borderRadius={'0.5rem'} p={'0.25rem 1rem'}>Web3 Technologies</Box>
      <Box ref={box6Ref} whiteSpace={'nowrap'} position={'absolute'} border={'0.0625rem solid'} borderColor={'#fff'} borderRadius={'0.5rem'} p={'0.25rem 1rem'}>Transaction Freedom</Box>
      <Box ref={box7Ref} whiteSpace={'nowrap'} position={'absolute'} border={'0.0625rem solid'} borderColor={'#fff'} borderRadius={'0.5rem'} p={'0.25rem 1rem'}>Game Development Studio</Box>
      <Box ref={box8Ref} whiteSpace={'nowrap'} position={'absolute'} border={'0.0625rem solid'} borderColor={'#fff'} borderRadius={'0.5rem'} p={'0.25rem 1rem'}>Security</Box>
    </Box>
  );
};

export default Tags;
