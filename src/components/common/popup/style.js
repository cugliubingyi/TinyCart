import styled from "styled-components";

export const PopUpMask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpWrapper = styled.div`
  width: 320px;
  height: 180px;
  padding: 32px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .popup-text {
    width: 100%;
    height: 24px;
    line-height: 24px;
    font-size: 16px;
    color: #1c1f21;
    font-weight: bold;
    text-align: center;
  }
  .popup-btns {
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .remain-btn {
      width: 112px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      border-radius: 18px;
      color: #545c63;
      background: rgba(84, 92, 99, 0.1);
      font-size: 14px;
      cursor: pointer;
    }
    .go-btn-link {
      display: block;
      width: 112px;
      height: 36px;
      border-radius: 18px;
      overflow: hidden;
      text-decoration: none;
      cursor: pointer;
      .go-btn {
        width: 100%;
        height: 100%;
        line-height: 36px;
        text-align: center;
        color: #fff;
        background: #ff4400;
        font-size: 14px;
      }
    }
  }
`;
