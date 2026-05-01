import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "./nav";

const meta: Meta = {
  title: "Components/Nav",
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Nav.Root>
      <Nav.Brand />
      <Nav.Actions>
        <Nav.Links>
          <Nav.Link href="/essays" active onNav={() => {}}>
            essays
          </Nav.Link>
          <Nav.Link href="/projects" onNav={() => {}}>
            projects
          </Nav.Link>
          <Nav.Link href="/now" onNav={() => {}}>
            now
          </Nav.Link>
        </Nav.Links>
        <Nav.ThemeToggle theme="paper" onTheme={() => {}} />
      </Nav.Actions>
    </Nav.Root>
  ),
};

export const WithActiveLink: StoryObj = {
  render: () => (
    <Nav.Root>
      <Nav.Brand />
      <Nav.Actions>
        <Nav.Links>
          <Nav.Link href="/essays" active onNav={() => {}}>
            essays
          </Nav.Link>
          <Nav.Link href="/projects" onNav={() => {}}>
            projects
          </Nav.Link>
          <Nav.Link href="/now" onNav={() => {}}>
            now
          </Nav.Link>
        </Nav.Links>
        <Nav.ThemeToggle theme="paper" onTheme={() => {}} />
      </Nav.Actions>
    </Nav.Root>
  ),
};

export const DarkTheme: StoryObj = {
  render: () => (
    <div data-theme="ink" className="bg-ink min-h-screen">
      <Nav.Root>
        <Nav.Brand />
        <Nav.Actions>
          <Nav.Links>
            <Nav.Link href="/essays" active onNav={() => {}}>
              essays
            </Nav.Link>
            <Nav.Link href="/projects" onNav={() => {}}>
              projects
            </Nav.Link>
            <Nav.Link href="/now" onNav={() => {}}>
              now
            </Nav.Link>
          </Nav.Links>
          <Nav.ThemeToggle theme="ink" onTheme={() => {}} />
        </Nav.Actions>
      </Nav.Root>
    </div>
  ),
};

export const BrandOnly: StoryObj = {
  render: () => (
    <Nav.Root>
      <Nav.Brand />
    </Nav.Root>
  ),
};

export const LinkActive: StoryObj = {
  render: () => (
    <Nav.Link href="/essays" active onNav={() => {}}>
      essays
    </Nav.Link>
  ),
};

export const LinkInactive: StoryObj = {
  render: () => (
    <Nav.Link href="/essays" onNav={() => {}}>
      essays
    </Nav.Link>
  ),
};
