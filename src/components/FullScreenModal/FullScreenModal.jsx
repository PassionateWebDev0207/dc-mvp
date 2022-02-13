import React from 'react'
import { useMedia } from 'react-use'
import TabMenu from '../TabMenu'
import { Modal, Popover, Button } from 'antd'
import { LeftOutlined, MoreOutlined } from '@ant-design/icons'
import './style.less'

const FullScreenModal = ({
  title,
  visible,
  onBackClick,
  onOk,
  onCancel,
  okBtnText,
  cancelBtnText,
  enableOkBtn,
  subMenu = [],
  children,
}) => {
  const isMobile = useMedia('(max-width: 767px)', false)
  const mobileVersionOperations = () => (
    <div className="mobile-version-operations">
      <Button
        onClick={() => onCancel()}
        style={{ marginBottom: '8px' }}
      >
        {cancelBtnText || 'Cancel'}
      </Button>
      <Button
        type="primary"
        disabled={!enableOkBtn}
        onClick={() => onOk()}
      >
        {okBtnText || 'OK'}
      </Button>
    </div>
  )
  return visible ? (
    <Modal
      visible={visible}
      closable={false}
      footer={null}
      width="100%"
      wrapClassName="full-screen-modal"
    >
      <>
        <div className="full-screen-modal-header">
          <div>
            <LeftOutlined
              onClick={() => onBackClick()}
              style={{
                color: 'var(--light-grey-color)',
                marginRight: '24px',
                fontSize: '24px',
              }}
            />
            {title}
          </div>
          <div className="full-screen-modal-ops">
            {!isMobile && (
              <>
                <Button
                  onClick={() => onCancel()}
                  style={{ marginRight: '1rem' }}
                >
                  {cancelBtnText || 'Cancel'}
                </Button>
                <Button
                  type="primary"
                  disabled={!enableOkBtn}
                  onClick={() => onOk()}
                >
                  {okBtnText || 'OK'}
                </Button>
              </>
            )}
            {isMobile && (
              <Popover
                content={mobileVersionOperations}
                trigger="click"
                placement="bottomRight"
              >
                <div className="more-button">
                  <MoreOutlined />
                </div>
              </Popover>
            )}
          </div>
        </div>
        <div className="full-screen-modal-body">
          {subMenu.length > 0 && Array.isArray(children) ? (
            <TabMenu menuItems={subMenu} tabPosition="top" minHeight="1px">
              {children
                ? children.map((child, i) => (
                    <div className="tab-pane-item" key={i}>
                      {child}
                    </div>
                  ))
                : subMenu.map((menu, i) => (
                    <div className="tab-pane-item" key={i}>
                      {menu}
                    </div>
                  ))}
            </TabMenu>
          ) : (
            children
          )}
        </div>
      </>
    </Modal>
  ) : (
    <div />
  )
}

export default FullScreenModal
