import styled from "styled-components";

import {Tabs,TabList,Tab,TabPanel} from "react-tabs";

export const wrapperTabs= styled(Tabs)`
    font-size: 1rem;
   
`;
export const wrapperTabList= styled(TabList)`
    list-style-type: none;
    padding: 0.25rem;
    display: flex;
    margin: 0;
    gap:0.25rem;
    display: flex;
    flex-direction:row;
    align-items: flex-start;
`;
wrapperTabList.tabsRole="TabList";

export const wrapperTab= styled(Tab)`
    border-radius:10px;
    border:1px solid #ccc;
    padding: 0.3rem;
    user-select: none;
    cursor: pointer;

    &.is-selected{
        outline: 0.5px solid green;
        border:none;
        background-color: green;
        color: white;
    }
`;
wrapperTab.tabsRole="Tab";

export const wrapperTabPanel= styled(TabPanel)`
    padding: 0.5rem;
    border: 1px solid #ccc;
    display: none;
    border-radius: 10px 10px 0 0;
    &.is-selected{
        display: block;
    }
`;
wrapperTabPanel.tabsRole="TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap:wrap;
`;