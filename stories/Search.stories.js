import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { Search } from '../src/components';

storiesOf('Search Bar', module)
  .add('with text', () => ({
    components: { Search },
    template: '<Search :onClick="action" />',
    // data: () => ({ }),
    methods: { action: action('search') },
  }));
