import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { Button } from '../src/components';

storiesOf('Button', module)
  .add('large, primary', () => ({
    components: { Button },
    template: '<Button :size="size" :variant="variant" :onClick="action">Hello Button</Button>',
    data: () => ({ size: 'large', variant: 'primary' }),
    methods: { action: action('primaryClicked') },
  }))
  .add('medium, secondary', () => ({
    components: { Button },
    template: '<Button :size="size" :variant="variant" :onClick="action">Hello Button</Button>',
    data: () => ({ size: 'medium', variant: 'secondary' }),
    methods: { action: action('secondaryClicked') },
  }))
  .add('danger', () => ({
    components: { Button },
    template: '<Button :variant="variant" :onClick="action">Hello Button</Button>',
    data: () => ({ variant: 'danger' }),
    methods: { action: action('dangerClicked') },
  }))
  .add('success', () => ({
    components: { Button },
    template: '<Button :variant="variant" :onClick="action">Hello Button</Button>',
    data: () => ({ variant: 'success' }),
    methods: { action: action('successClicked') },
  }));
