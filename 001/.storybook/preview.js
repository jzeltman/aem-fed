import { addDecorator, aemMetadata, GenericModel } from '@storybook/aem';

addDecorator(
  aemMetadata({
    models: {
      'Welcome': GenericModel
    }
  })
);