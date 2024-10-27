import { mount } from "@vue/test-utils";
import ACPanel from "@/components/ACPanel.vue";
import axios from "axios";
jest.mock("axios");

test("calculate the value in api", async () => {
  const nodes = ["A", "B", "C", "D"];
  const distance = 5;
  const from = "A";
  const to = "B";
  axios.get.mockResolvedValue({
    data: {
      nodes: nodes,
      distance: distance,
    },
  });

  const wrapper = mount(ACPanel);

  await wrapper.vm.getNode();
  expect(wrapper.vm.nodes).toEqual(nodes);

  wrapper.get('[data-test="from-node"]').setValue(from);
  wrapper.get('[data-test="to-node"]').setValue(to);
  await wrapper.get('[data-test="form"]').trigger("click");

  expect(wrapper.vm.isResponse).toEqual(true);

  const result = wrapper.get('[data-test="result"]');

  const expectResult = `From Node Name = "${from}", To Node Name = "${to}": A, B, C, D.\n\nTotal Distance: ${distance}`;

  expect(result.element.value).toEqual(expectResult);
});
