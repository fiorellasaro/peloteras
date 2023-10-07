import React, { FC, useState } from "react";
import { Input, TextArea, Select, InputRadio, Checkbox } from "../atoms";
import { InputDate } from "../molecules/InputDate";
import { FormProps } from "@/utils/interfaces";
import SelectCard from "../atoms/SelectCard";
import { Controller } from "react-hook-form";
import PlacesAutocomplete from "../molecules/GooglePlacesAutocomplete";
import SelectHours from "../molecules/SelectHours";
import { Tags } from "./TagsAdd";

export const Form: FC<FormProps> = ({
  formInputs,
  register,
  setValue,
  getValues,
  watch,
  gap,
  numberOfColumns,
  control,
  ...rest
}) => {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]); // Para manejar los tags seleccionados
  const defaultTags = [
    // Definir tus tags predeterminados aquí
    { label: 'Tag1', value: 'tag1' },
    { label: 'Tag2', value: 'tag2' },
    { label: 'Tag3', value: 'tag3' },
  ];

  const errors = rest.formState.errors;

  const handleTagSelection = (tag) => {
    setSelectedTags((prevSelectedTags) => ({
      ...prevSelectedTags,
      [tag]: !prevSelectedTags[tag],
    }));
  }
  return (
    <form
      style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}
      className={`!inline-grid !grid-cols-${numberOfColumns} ${
        gap ? `${gap}` : "gap-[28px]"
      } w-full`}
      autoComplete="off"
    >
      {formInputs.map((input: any, index: number) => {
        if (input.link) {
          return (
            <div key={index}>
              <p className="!m-0 text-[9px] text-davisGray font-bold">
                {input.label}
              </p>
              <div className="flex w-full items-center gap-1">
                <p className="!m-0 text-primary text-sm underline break-words w-11/12 font-bold">
                  {input.url}
                </p>
                <img
                  className="w-[24px] h-[24px] cursor-pointer"
                  src="/icons/copy.svg"
                  onClick={() => {
                    navigator.clipboard.writeText(input.url);
                  }}
                />
              </div>
            </div>
          );
        }

        if (input.select) {
          return (
            <div key={index}>
              <Select
                {...input}
                {...register(
                  input.id,
                  { required: input.required },
                  input.idOptions
                )}
                errorText={`Please enter ${input.label?.toLowerCase()}`}
                label={input.label}
                id={input.id}
                name={input.id}
                required={input.required}
                options={input.selectOptions}
                isSearchable={input.isSearchable}
                placeholderText={input.placeholder ?? input.placeholder}
                setFormValue={(value: any) => {
                  setValue(input.id, value);
                }}
              />
            </div>
          );
        }

        if (input.textArea) {
          return (
            <div className="h-full" key={index}>
              <TextArea
                {...register(input.id, {
                  required: input.required,
                  maxLength: 250,
                })}
                noLabel={input.noLabel}
                labelText={input.label}
                errorText={`Please enter ${input.label?.toLowerCase()}`}
                required={input.required}
                placeholderText={
                  input.placeholder ? input.placeholder : input.label || ""
                }
                disabled={input.disabled}
                setFormValue={(value: any) => {
                  setValue(input.id, value);
                }}
                rows={input.rows}
              />
            </div>
          );
        }

        if (input.addTag) {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginRight: "1.50rem",
              }}
            >
              <Tags
                initialTags={input.tags}
                tags={tags}
                remove={(index) => setTags(tags.filter((_, i) => i !== index))}
                setTags={setTags}
                selectedTags={selectedTags}
                handleTagSelection={handleTagSelection} 
                labelTags={input.labelTags}
              />
            </div>
          );
        }

        if (input.inputDate) {
          return (
            <div key={index} className="w-full h-[70px] flex">
              <InputDate
                labelText={input.label}
                disabled={input.disabled}
                placeholderText={input.placeholder}
                formDate={input.value ? input.value : watch(input.id)}
                setFormDate={(value) => {
                  setValue(input.id, value);
                }}
                {...register(input.id)}
              ></InputDate>
            </div>
          );
        }

        if (input.inputRadio) {
          return (
            <div key={index} className="w-full">
              <InputRadio
                options={input.options}
                labelText={input.label}
                placeholderText={input.placeholder}
                setFormValue={(value) => {
                  setValue(input.id, value);
                }}
                value={
                  watch(input.id) !== undefined
                    ? watch(input.id)
                    : input.defaultValue
                }
                {...register(input.id)}
              ></InputRadio>
            </div>
          );
        }

        if (input.checkbox) {
          return (
            <div key={index} className="w-full">
              <Checkbox
                index="1"
                option={input.option}
                setFormValue={(value) => setValue(input.id, value)}
                value={watch(input.id)}
              ></Checkbox>
            </div>
          );
        }

        if (input.selectCard) {
          return (
            <Controller
              key={index}
              control={control}
              name={input.id}
              defaultValue={[]}
              render={({ field: { onChange, value } }) => (
                <SelectCard
                  labelText={input.label}
                  options={input.options}
                  name={input.id}
                  register={register}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          );
        }

        if (input.autoCompleteLocation) {
          return (
            <div key={index} className="w-full">
              <PlacesAutocomplete
                {...input}
                label={input.label}
                {...register(input.id)}
                onAddressSelect={(value) => setValue(input.id, value)}
              />
            </div>
          );
        }
        if (input.selectHours) {
          return (
            <SelectHours
              key={index}
              name={input.id}
              setFormValue={(value) => {
                setValue(input.id, value);
              }}
              {...register(input.id)}
            />
          );
        }

        return (
          <div key={index} className="w-full flex">
            <Input
              {...register(input.id, {
                required: input.required,
                maxLength: input.maxLength,
                pattern: input.pattern,
              })}
              name={input.id}
              labelText={input.label}
              required={input.required}
              error={errors[input.id]}
              icon={input.icon}
              img={input.img}
              width={"100%"}
              type={input.type}
              placeholderText={
                input.placeholder ? input.placeholder : input.label
              }
              // {...(input.initialValue ? setValue(input.id, input.initialValue) :  '')}
              setFormValue={(value) => {
                setValue(input.id, value);
              }}
              disabled={input.disabled}
              max={input.max}
              errorText={
                errors[input.id] && `Please enter ${input.label?.toLowerCase()}`
              }
              {...rest}
            />
          </div>
        );
      })}
    </form>
  );
};
