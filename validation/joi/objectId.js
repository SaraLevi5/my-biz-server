import joi from "joi";

const objectIdSchema = joi.object({
  id: joi.string().hex().length(24).required(),
});

const ValidateObjectId = (id) => {
  return objectIdSchema.validateAsync({ id });
};

export default ValidateObjectId;
