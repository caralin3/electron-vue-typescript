import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { Button } from '../src/components';

storiesOf('Button', module)
  .add('Primary', () => ({
    components: { Button },
    template: '<Button :variant="variant" :onClick="action">Hello Button</Button>',
    data: () => ({ variant: 'primary' }),
    methods: { action: action('primaryClicked') },
  }))
  .add('Secondary', () => ({
    components: { Button },
    template: '<Button :variant="variant" :onClick="action">Hello Button</Button>',
    data: () => ({ variant: 'secondary' }),
    methods: { action: action('secondaryClicked') },
  }))
  .add('Danger', () => ({
    components: { Button },
    template: '<Button :variant="variant" :onClick="action">Hello Button</Button>',
    data: () => ({ variant: 'danger' }),
    methods: { action: action('dangerClicked') },
  }))
  .add('Success', () => ({
    components: { Button },
    template: '<Button :variant="variant" :onClick="action">Hello Button</Button>',
    data: () => ({ variant: 'success' }),
    methods: { action: action('successClicked') },
  }));
