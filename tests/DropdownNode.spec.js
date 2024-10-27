import { mount } from "@vue/test-utils";
import ACPanel from "@/components/ACPanel.vue";
import axios from "axios";
jest.mock("axios");

test("retrieved node list in api", async () => {
  const nodes = ["A", "B", "C", "D"];
  axios.get.mockResolvedValue({
    data: {
      nodes: nodes,
    },
  });

  const wrapper = mount(ACPanel);

  await wrapper.vm.getNode();
  expect(wrapper.vm.nodes).toEqual(nodes);

  const fromDropdowns = wrapper.get('[data-test="from-node"]');
  const fromOptions = fromDropdowns.findAll("option");
  const fromValues = fromOptions.map((option) => option.text());
  expect(fromValues).toEqual(nodes);

  const toDropdowns = wrapper.get('[data-test="to-node"]');
  const toOptions = toDropdowns.findAll("option");
  const toValues = toOptions.map((option) => option.text());
  expect(toValues).toEqual(nodes);
});
