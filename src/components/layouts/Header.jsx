import { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import { PrimaryButton } from '../ui/Button';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Datadynamix</h1>
              <p className="text-xs text-muted-foreground">Technologies LLC</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <PrimaryButton icon={<ArrowRightOutlined />}>
              Request Demo
            </PrimaryButton>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden"
            type="text"
            icon={<MenuOutlined className="text-xl" />}
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setDrawerOpen(false)}
              className="text-lg text-foreground hover:text-primary font-medium transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
          <PrimaryButton icon={<ArrowRightOutlined />}>
            Request Demo
          </PrimaryButton>
        </div>
      </Drawer>
    </motion.header>
  );
};

export default Header;