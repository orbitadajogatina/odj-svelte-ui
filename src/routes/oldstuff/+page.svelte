<script>
  import { Input, Alert, Badge, Button, Textarea, Tabs, TabItem, Select, Modal, Radio } from '$lib/_legacy';
  
  let defaultModal = false;
</script>

<Input type="text" />
<Alert color="red" rounded dismissable>ABCDEF...</Alert>
<Badge dismissable/>
<Button color="red">River Below</Button>
<Button color="red" outline>River Below</Button>
<Button color="alternative">River Below</Button>
<Button color="alternative" outline>River Below</Button>
<Button color="dark">River Below</Button>
<Button color="dark" outline>River Below</Button>
<Button color="light">River Below</Button>
<Button color="light" outline>River Below</Button>
<br>
<Input type="text" />
<Textarea/>
<Select items={[{value: 'A', name: 'B'}]}/>
<br>
<Button on:click={() => (defaultModal = true)}>Abrir modal</Button>
<Modal title="Terms of Service" bind:open={defaultModal} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <svelte:fragment slot="footer">
    <Button on:click={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>
<br>
<Radio>Teste</Radio>
<Tabs style="underline">
  <TabItem open title="Profile">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>