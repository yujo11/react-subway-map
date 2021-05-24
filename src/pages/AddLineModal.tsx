import Container from '@shared/Container/Container';
import Input from '@shared/Input/Input';
import SelectInput from '@shared/SelectInput/SelectInput';
import Title from '@shared/Title/Title';
import React from 'react';
import arrowImg from 'assets/images/arrow.png';
import closeImg from 'assets/images/close.png';
import Palette from '@units/Palette/Palette';
import Button from '@shared/Button/Button';
import ImageButton from '@shared/ImageButton/ImageButton';

const AddLineModal = () => {
  return (
    <div className="z-10 w-full h-full">
      <Container>
        <div className="flex justify-end -mb-4">
          <ImageButton
            imgUrl={closeImg}
            bgColor="bg-gray-100"
            size="w-8 h-8"
            imgSize="w-4"
            hoverBgColor="bg-gray-200"
          />
        </div>
        <Title text="🛤️ 노선 생성" className="mb-8 text-center" />
        <Input title="노선 이름" placeholder="노선 이름을 입력해주세요" className="mb-8 w-full" />
        <div className="flex items-center mb-8">
          <SelectInput title="조회하실 노선을 선택해주세요." className="w-full">
            <option>분당선</option>
          </SelectInput>
          <img className="mx-2 w-8 h-8" src={arrowImg} alt="arrowImg" />
          <SelectInput title="조회하실 노선을 선택해주세요." className="w-full">
            <option>분당선</option>
          </SelectInput>
        </div>
        <div className="flex items-center justify-between mb-8">
          <Input title="거리" placeholder="거리를 입력해주세요" className="w-10/12" />
          <div className="w-1/12 h-12 rounded ring-gray-500 ring-1" />
        </div>
        <Palette />
        <div className="flex justify-end mt-8">
          <Button text="확인" />
        </div>
      </Container>
    </div>
  );
};

export default AddLineModal;