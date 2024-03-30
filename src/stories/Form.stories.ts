import type { Meta, StoryObj } from '@storybook/react';
import {within, userEvent} from '@storybook/testing-library'
import { expect } from '@storybook/jest';
import  Form  from './Form';

const meta = {
    title: "Example/Form Component",
    component: Form,
} satisfies Meta<typeof Form>

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicForm: Story = {};

export const SubmitWithoutData: Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        
        await userEvent.click(
            await canvas.findByTestId('submit-btn')
        )
        expect(await canvas.findByTestId('error_tip')).toBeInTheDocument();
    }
};

export const SubmitWithData: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Click on the input field with test ID 'data-inpt'
        const dataInput = await canvas.findByTestId("data-inpt");
        await userEvent.click(dataInput);

        // Type the text "Just for show!"
        await userEvent.type(dataInput, "Just for show!");

        // Click on the button with test ID 'submit-btn'
        const submitButton = await canvas.findByTestId('submit-btn');
        await userEvent.click(submitButton);

        // Assert that the element with test ID 'error_tip' is not present
        const errorTipElement = await canvas.queryByTestId('error_tip');
        expect(errorTipElement).not.toBeInTheDocument();
    }
};
