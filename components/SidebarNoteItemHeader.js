import dayjs from 'dayjs';

const timeFormat = (dateTime) => dayjs(dateTime).format('YYYY-MM-DD hh:mm:ss');

export default function SidebarNoteItemHeader({ title, updateTime }) {
  return (
    <header className="sidebar-note-header">
      <strong>{title}</strong>
      <small>{timeFormat(updateTime)}</small>
    </header>
  );
}