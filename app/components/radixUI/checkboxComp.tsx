import { Checkbox, Flex, Text } from '@radix-ui/themes'

export default function CheckboxComp({ NamedByParent }: { NamedByParent: string }) {
  return (
    <div >
      <Text as="label" size="2">
        <Flex gap="2">
          <Checkbox defaultChecked /> {NamedByParent}
        </Flex>
      </Text>
    </div>
  )
}